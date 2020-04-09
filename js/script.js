/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

function verdwijnen() {
    document.getElementById("knoppen").style.opacity = "1.0";
    var video = document.getElementById('achtergrondvideo');
    video.src = "img/snelle-deff_3.mp4";
    video.look = false;
    video.play();
    video.muted = false;
    document.getElementById('achtergrondvideo').addEventListener('ended' ,reload, false );
    function reload() {
        location.reload();
    }
}

function paniek() {
    document.getElementById("knoppen").style.opacity = "1.0";
    var video = document.getElementById('achtergrondvideo');
    video.src = "img/help-deff_4.mp4";
    video.look = false;
    video.play();
    video.muted = false;
    document.getElementById('achtergrondvideo').addEventListener('ended' ,reload, false );
    function reload() {
        location.reload();

    }
}


function vluchten() {
    document.getElementById("knoppen").style.opacity = "1.0";
    var video = document.getElementById('achtergrondvideo');
    video.src = "img/joejoe-deff_4.mp4";
    video.look = false;
    video.play();
    video.muted = false;
    document.getElementById('achtergrondvideo').addEventListener('ended' ,reload, false );
    function reload() {
        location.reload();

    }
}
