window.addEventListener("load",  () => {
        const bar = document.querySelectorAll(".bar");
        for (let i = 0; i < bar.length; i++) {
          bar.forEach((item, j) => {
            // Random move
            item.style.animationDuration = `${Math.random() * (0.7 - 0.2) + 0.2}s`; // Change the numbers for speed / ( max - min ) + min / ex. ( 0.5 - 0.1 ) + 0.1
          });
        };
      });

      
//MENU
$("#menu_check").click(function() {
  $('#menu_checkbox').addClass('open');
  $('#overlay').addClass('open');
});

$('.close-menu').click(function() {
 $('#overlay').removeClass('open');
 $('#menu_checkbox').removeClass('open');
});

AOS.init();


//SHOW REPRODUCTOR TRAILER
$("#trailer_button").click(function(){
  $('.reproductor-container').removeClass('hidden');
});

$("#close").click(function(){
  $('.reproductor-container').addClass('hidden');
});
//reproductor trailer
$(document).ready(function () {
  var playing = false,
    podcasterName = $(".podcaster-name"),
    trailerName = $(".trailer-name"),
    time = $(".time"),
    fillBar = $(".fillBar");

  let audioData = [];

  var song = new Audio();
  var CurrentSong = 0;
  window.onload = load();

  function load() {
    audioData = [
      {
        podcaster: "Las Karencitas Descalzas",
        name: "Bienvenidos al culto",
        src:
          "img/trailer_player/trailer-2024.mp3"
      }
    ];

    podcasterName.html(audioData[CurrentSong].podcaster);
    trailerName.html(audioData[CurrentSong].name);
    song.src = audioData[CurrentSong].src;
  }

  function playSong() {
    var curSong = audioData[CurrentSong];
    podcasterName.html(curSong.podcaster);
    trailerName.html(curSong.name);
    song.src = curSong.src;
    song.play();
    $("#play").addClass("icon-pause_btn");
    $("#play").removeClass("icon-play_btn");
    $("img").addClass("active");
    $(".player-trailer").addClass("active");
  }

  song.addEventListener("timeupdate", function () {
    var position = (100 / song.duration) * song.currentTime;
    var current = song.currentTime;
    var duration = song.duration;
    var durationMinute = Math.floor(duration / 60);
    var durationSecond = Math.floor(duration - durationMinute * 60);
    var durationLabel = durationMinute + ":" + durationSecond;
    currentSecond = Math.floor(current);
    currentMinute = Math.floor(currentSecond / 60);
    currentSecond = currentSecond - currentMinute * 60;
    // currentSecond = (String(currentSecond).lenght > 1) ? currentSecond : ( String("0") + currentSecond );
    if (currentSecond < 10) {
      currentSecond = "0" + currentSecond;
    }
    var currentLabel = currentMinute + ":" + currentSecond;
    var indicatorLabel = currentLabel + " / " + durationLabel;

    fillBar.css("width", position + "%");

    $(".time").html(indicatorLabel);
  });

  $("#play").click(function playOrPause() {
    if (song.paused) {
      song.play();
      playing = true;
      $("#play").addClass("icon-pause_btn");
      $("#play").removeClass("icon-play_btn");
      $("img").addClass("active");
    } else {
      song.pause();
      playing = false;
      $("#play").removeClass("icon-pause_btn");
      $("#play").addClass("icon-play_btn");
      $("img").removeClass("active");
    }
  });

  $('.modal-link').click(function(){
    $('.modal').show();
  });
  $('.modal .close').click(function(){
    $('.modal').hide();
  })
  
});




//Episodios
var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
