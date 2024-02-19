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
          "img/trailer_player/trailer.mp3"
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

  $("#prev").click(function prev() {
    CurrentSong--;
    if (CurrentSong < 0) {
      CurrentSong = 2;
    }
    playSong();
  });

  $("#next").click(function next() {
    CurrentSong++;
    if (CurrentSong > 2) {
      CurrentSong = 0;
    }
    playSong();
  });
});




//Reproductor episodios
window.addEventListener('load', iniciarReproductor);

let idFrame, listadoCanciones = ['Ocultismo','Esoterismo no es magia','Tradiciones Mexas', 'Halloween y otras historias',
                                  'Íncubos y Súcubos'];
let episodioDescripciones = ['En este episodio 17 de la segunda temporada desentrañamos los misterios que rodean la palabra Ocultismo. Además de algunos personajes interesantes como Pachita y algunos otros referentes a este tema como Madame Blavatsky.',
'Sí o si alguna vez hemos escuchado la palabra Esoterismo, y esta regularmente tiende a ser relacionada con algo mágico, hasta con los amarres y algo más... jajaja pero no.',
'Este mes al igual que septiembre es especial para cualquier mexicano y cómo no serlo si tenemos el gusto y placer de volver a honrar, platicar, visitar y tener presentes a nuestros queridísimos muertitos.',
'Es 31 de Octubre y no podíamos dejar pasar la festividad más "Monstruosa" del año 🧝‍🧟‍♀️. Esperada por muchos... ¡Halloween ya está aquí! 🎃 Y las Karencitas nos echamos un round charlando sobre ello (y otras historias como un plus).',
'Acompáñanos en este episodio 13 de la 2da temporada donde estaremos comentando un tema algo picoso, exótico y sensual... los íncubos y súcubos, también conocidos como demonios sexuales, ¿Quiénes son?, ¿De dónde provienen?'];

let episodioAcotaciones = ['¡No te lo pierdas!','En este episodio 16 de nuestra segunda temporada descubre junto a las Karencitas el significado y origen de esta mística palabra.','Es por eso que no podemos dejar de dedicarle un episodio a nuestro mexicanísimo Día de Muertos, el 15 de nuestra 2da Temporada.','¿Dulce o Truco? Descubre los misterios que aguarda este episodio especial para ti, el 14 de nuestra 2da Temporada.','Además de las ya clásicas e imperdibles referencias a personajes y películas relacionadas.'];                             
let emisionDate = ['29 diciembre 2023','01 diciembre 2023','07 noviembre 2023','31 octubre 2023', '07 octubre 2023'];
let episodeDuration = ['40 min','29 min','42 min', '35 min', '36 min'];
let episodeNumber = ['E17','E16','E15', 'E14', 'E13'];
let spotiUrl = ['https://open.spotify.com/episode/2KRi9Q6Sng17OPEZ3WlIut?si=Lsx8TGFIQ_yucLIyhJ8u-w','https://open.spotify.com/episode/2Hau5cztMHl49C8to06UCC?si=MJhYMjcXSF6yCBVnGOnyJg','https://open.spotify.com/episode/2e29vJNVoWubg8o6tjFUK8?si=A4xpy0VKRZ2oVwf9HwNLtw', 'https://open.spotify.com/episode/0XQFjP69RIjnAMdG4AvjGV?si=SqL6Kj7cSfWB8rO30zVnrQ', 'https://open.spotify.com/episode/1ZlR6Qv4dWMLwUnaj0S47l?si=yRFhvUuzSvqxi9mXtIrN6g'];
let ytUrl = ['',
'','https://youtu.be/4pb1OKW1PQA?si=qiKSkCy5_PwW10ep', 
'https://youtu.be/62m8f9TrpZU?si=tlSbQuHdhd9VD1R7', 'https://youtu.be/XkGLu4EH8JE?si=ltQZRt034UBUZlic'];
let icono = [], uris = {musica: 'img/episodios/audios/', caratula: 'img/episodios/covers/', covers: 'img/episodios/covers/'},reproduciendo = 0;
let cancion = {
  audio: new Audio(),
  URI: '',
  caratula:'',
  duracion:'',
  covers:''
};
let reproductor = {
  nodo: '',
  duracion: '',
  caratula: '',
  covers:'',
  deslizador: [],
  boton: []
};

icono['pausa'] = 'icon-pause_btn', icono['reproducir'] = 'icon-play_btn',
icono['volumenSilenciado'] = 'icon-volume_mute', icono['volumenBajo'] = 'icon-volume_down',
icono['volumenAlto'] = 'icon-volume_icon';

function iniciarReproductor(){
  reproductor.boton['reproducirPausa'] = document.querySelector('.controles__reproduccion .' + icono['reproducir']).parentElement;
  reproductor.boton['cancionSiguiente'] = document.querySelector('.controles__reproduccion .icon-next_btn').parentElement;
  reproductor.boton['cancionAnterior'] = document.querySelector('.controles__reproduccion .icon-prev_btn').parentElement;
  reproductor.boton['volumen'] = document.querySelector('.controles__volumen button');
  reproductor.deslizador['volumen'] = document.querySelector('.controles__volumen input');
  reproductor.deslizador['progresoCancion'] = document.querySelector('.progreso__reproduccion input');

  reproductor.caratula = document.querySelector('.episode__cover img');
  reproductor.covers = document.querySelector('.cover__listening img');
  reproductor.duracion = document.querySelector('.progreso__reproduccion time');
  reproductor.nodo = document.querySelector('.episode-player');
  reproductor.boton['reproducirPausa'].addEventListener('click', alternarReproduccion);
  reproductor.boton['cancionSiguiente'].addEventListener('click', () => cargarCancion(1));
  reproductor.boton['cancionAnterior'].addEventListener('click', () => cargarCancion(-1));
  reproductor.boton['volumen'].addEventListener('click', alternarDeslizadorVolumen);
  document.addEventListener('click', alternarDeslizadorVolumen);
  reproductor.deslizador['volumen'].addEventListener('input', moverVolumen);
  reproductor.deslizador['progresoCancion'].addEventListener('input', moverProgreso);

  reproductor['caratula'].style.animationPlayState = 'paused';

  cargarCancion(reproduciendo);
}

function moverProgreso(e){
  let momento = e.target.value;
  cancion.audio.fastSeek(momento);
}

function cargarCancion(sentido){
  let cambiarA = reproduciendo + sentido;
  reproductor.caratula.classList.add('oculto');
  reproductor.covers.classList.add('oculto');
  
  if(cambiarA >= listadoCanciones.length) reproduciendo = 0;
  else if(cambiarA < 0) reproduciendo = listadoCanciones.length - 1;
  else reproduciendo = cambiarA;

  cancion.URI = uris.musica + listadoCanciones[reproduciendo] + '.mp3';
  cancion.caratula = uris.caratula + listadoCanciones[reproduciendo] + '.png';
  cancion.covers = uris.covers + listadoCanciones[reproduciendo] + '.png';

  cancion.audio.src = cancion.URI;

  reproductor.caratula.src = cancion.caratula;
  reproductor.caratula.classList.remove('oculto');
  reproductor.covers.src = cancion.covers;
  reproductor.covers.classList.remove('oculto');

  reproductor.deslizador['progresoCancion'].value = 0;

  setTimeout( () => cambiarCancion(), 200);
}

function cambiarCancion(){
  cancion.duracion = duracionCancion(cancion.audio.duration);

  reproductor.duracion.innerText = `00:00/${cancion.duracion.minutos}:${cancion.duracion.segundos}`;
  reproductor.deslizador['progresoCancion'].max = cancion.audio.duration;

  document.querySelector('.episode_name').innerText = listadoCanciones[reproduciendo];
  document.querySelector('.episode-description').innerText = episodioDescripciones[reproduciendo];
  document.querySelector('.episode-acotacion').innerText = episodioAcotaciones[reproduciendo];
  document.querySelector('.emision-date').innerText = emisionDate[reproduciendo];
  document.querySelector('.episode-duration').innerText = episodeDuration[reproduciendo];
  document.querySelector('.episode-numb').innerText = episodeNumber[reproduciendo];
  document.querySelector ('.stream-spotify').href = spotiUrl[reproduciendo];
  document.querySelector ('.stream-youtube').href = ytUrl[reproduciendo];

  
  if(reproductor.boton['reproducirPausa'].firstChild.classList.contains(icono['pausa'])) cancion.audio.play();
}

function duracionCancion(duracionS){
  let minutos, segundos;
  minutos = Math.floor(duracionS/60).toString().padStart(2, '0');
  segundos = Math.floor(duracionS - minutos*60).toString().padStart(2, '0');

  return({minutos, segundos});
}

function actualizarReproductor(){
  idFrame = requestAnimationFrame(actualizarReproductor);

  let momentoActual = duracionCancion(cancion.audio.currentTime);
  reproductor.duracion.innerText = `${momentoActual.minutos}:${momentoActual.segundos}/${cancion.duracion.minutos}:${cancion.duracion.segundos}`;

  reproductor.deslizador['progresoCancion'].value = cancion.audio.currentTime;

  //Si terminó la canción, cambiar a la siguiente.
  if(cancion.audio.currentTime == cancion.audio.duration) cargarCancion(1);
}

function alternarReproduccion(){
  let pausar = reproductor.boton['reproducirPausa'].firstChild.classList.toggle(icono['reproducir']);
  reproductor.boton['reproducirPausa'].firstChild.classList.toggle(icono['pausa']);

  if(!pausar){
    idFrame = requestAnimationFrame(actualizarReproductor);
    cancion.audio.play();
    reproductor['caratula'].style.animationPlayState = 'running';
    reproductor.nodo.classList.add('reproduciendo');
  } else {
    window.cancelAnimationFrame(idFrame);
    cancion.audio.pause();
    reproductor['caratula'].style.animationPlayState = 'paused';
    reproductor.nodo.classList.remove('reproduciendo');
  }
}

function alternarDeslizadorVolumen(e){
  e.stopPropagation();
  if(e.target == reproductor.boton['volumen'] || e.target == reproductor.boton['volumen'].firstChild){
    reproductor.deslizador['volumen'].classList.toggle('oculto');
  } else {
    reproductor.deslizador['volumen'].classList.add('oculto');
  }
}

function moverVolumen(e){
  let volumen = e.target.value;

  cancion.audio.volume = volumen/100;

  let iconoVolumen = reproductor.boton['volumen'].querySelector('i');

  if(volumen == 0) iconoVolumen.className = icono['volumenSilenciado'];
  else if(volumen <= 50) iconoVolumen.className = icono['volumenBajo'];
  else iconoVolumen.className = icono['volumenAlto'];
}


