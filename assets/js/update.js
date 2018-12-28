/*
 * This script is to alert visitors with browsers
 * that are very old and might not be supported by
 * this site.
 *
 * Christopher McArthur, 07/09/2017.
 */


var $buoop = {
    vs: {
        i: 9,
        f: -4,
        o: -4,
        s: 8,
        c: -4
    },
    api: 4
};

function $buo_f() {
    var e = document.createElement("script");
    e.src = "https://browser-update.org/update.min.js";
    document.body.appendChild(e);
};

try {
    document.addEventListener("DOMContentLoaded", $buo_f, false)
} catch (e) {
    window.attachEvent("onload", $buo_f)
}