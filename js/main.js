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

let idFrame, listadoCanciones = ['Tierra Hueca','Gastronomía Mexa', 'Espíritus Chocarreros',
                                  'Muerte Mundana', 'Estación trabajo Para Ayer'];
let episodioDescripciones = ['¿Han escuchado hablar de la posibilidad de que la Tierra sea hueca? En este episodio exponemos algunas teorías que estudiaron esta posibilidad, así como a los valientes hombres que se atrevieron a pensar más allá y emprendieron su viaje a lo desconocido para descubrir y demostrar dichas creencias.',
'Uno de los placeres más ricos de la vida es la comida... y una muestra de ello es el delicioso sazón que tiene la gastronomía mexicana, es por eso que en este episodio las karencitas le queremos rendir homenaje platicando sobre los orígenes, platillos representativos y una que otra anécdota sobre la comida orgullosamente mexa.',
'¿Alguna vez se han preguntado que pasa después de que morimos? En este episodio, las karencitas ponemos sobre la mesa nuestras opiniones y creencias acerca del karma, la existencia de los espíritus chocarreros y si nos quedamos vagando aquí en la tierra o que pasa en esta transición al morir.',
'¿Se han preguntado que hacer con su cuerpo después de morir? Las karencitas nos hemos planteado esa y otras preguntas relacionadas a la muerte mundana como la conocemos. Acompáñanos en este episodio donde ponemos sobre la mesa nuestras opiniones e intercambiamos puntos de vista al respecto.',
'Acompáñanos en este episodio a escuchar algunas tristes historias al conseguir trabajo, lo que nos molesta y algunos tips que te pueden servir a la hora de buscar empleo; además, descubre parte de nuestras experiencias laborales como diseñadoras gráficas.'];

let episodioAcotaciones = ['No solo es ciencia ficción... ¿O sí?','Acompáñanos en este delicioso episodio.','No te lo pierdas','No dejen para mañana lo que pueden hacer hoy.','¿Estás listo? ¡Bienvenido!'];                             
let emisionDate = ['30 junio 2023','16 junio 2023','02 junio 2023', '19 mayo 2023', '07 mayo 2023'];
let episodeDuration = ['24 min','32 min', '30 min', '28 min', '40 min',];
let episodeNumber = ['E8','E7', 'E6', 'E5', 'E4',];
let icono = [], uris = {musica: 'img/episodios/audios/', caratula: 'img/episodios/covers/', covers: 'img/episodios/covers/'}, reproduciendo = 0;
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

//ARRIBA BTN
$('.ir-arriba').click(function(){
  $('body, html').animate({
    scrollTop: '0px'
  },1800);
});

$(window).scroll(function(){
  if( $(this).scrollTop() > 798 ){
    $('.ir-arriba').slideDown(300);
  } else {
    $('.ir-arriba').slideUp(300);
  }
});
