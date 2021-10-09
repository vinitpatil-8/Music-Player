$(document).ready(function () {
    let ofc;
    let currentSong = 1;


    // play Function
    $("#play").click(function () {
        $(this).hide();
        $("#pause").show();
        if (currentSong == 1) {
            $("#lemme").trigger("play");
        }
        else if (currentSong == 2) {
            $("#faded").trigger("play");
        }
    })

    // pause Function
    $("#pause").click(function () {
        $(this).hide();
        $("#play").show();
        if (currentSong == 1) {
            $("#lemme").trigger("pause");
        }
        else if (currentSong == 2) {
            $("#faded").trigger("pause");
        }
    })

    // home function
    $("#home1").click(function () {
        $("#exp").hide();
        $("#home").show();
        $("#pause").hide();
        $("#play").show();
    })

    // explore function
    $("#explore").click(function () {
        $("#home").hide();
        $("#exp").show();
        $("#lemme").trigger("pause");
        $("#faded").trigger("pause");
    })

    // next function
    $("#next1").click(function () {
        $("#lemme").hide();
        $("#lemme").trigger("pause");
        $("#faded").trigger("pause");
        $("#faded1").show();
        $("#lemme1").hide();
        $("#faded").show();
        $("#pause").hide();
        $("#play").show();
        document.getElementById("lemme").currentTime = 0;
        document.getElementById("faded").currentTime = 0;
        currentSong = 2
    })

    // back function
    $("#back1").click(function () {
        $("#faded").hide();
        $("#faded").trigger("pause");
        $("#lemme").trigger("pause");
        $("#lemme").show();
        document.getElementById("lemme").currentTime = 0;
        document.getElementById("faded").currentTime = 0;
        $("#pause").hide();
        $("#play").show();
        $("#faded1").hide();
        $("#lemme1").show();
        currentSong = 1
    })

    // Progress Bar

    // Function For Song 1
    function play() {
        let playing = document.getElementById("lemme");
        let progress_bar = document.getElementById("progress_bar");
        let progressed = document.getElementById("progress");
        playing.ontimeupdate = function (e) {
            progressed.style.width = Math.floor(playing.currentTime * 100 / playing.duration) + "%";
        }
        progress_bar.onclick = function (e) {
            playing.currentTime = ((e.offsetX / progress_bar.offsetWidth) * playing.duration);
        }
    }

    // Function For Song 2
    function unplay() {
        let playing = document.getElementById("faded");
        let progress_bar = document.getElementById("progress_bar");
        let progressed = document.getElementById("progress");
        playing.ontimeupdate = function (e) {
            progressed.style.width = Math.floor(playing.currentTime * 100 / playing.duration) + "%";
        }
        progress_bar.onclick = function (e) {
            playing.currentTime = ((e.offsetX / progress_bar.offsetWidth) * playing.duration);
        }
    }
    
    // Updating Progress Bar
    setInterval(() => {
        if (currentSong == 1) {
            play()
        }
        if (currentSong == 2) {
            unplay()
        }
    }, 500);

});