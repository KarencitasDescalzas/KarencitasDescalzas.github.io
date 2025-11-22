$(document).ready(function() {

  // Loader (solo en index)
  if ($("#loader").length) {
    setTimeout(() => {
      $("#loader").addClass("hidden");
    }, 2000);
  }


// Transición entre páginas tipo "slide"
$("a.nav-link").on("click", function(e) {
  const link = $(this).attr("href");
  if (link && !link.includes("#")) {
    e.preventDefault();

    // Clonar la página actual
    const clone = $("body").clone();
    clone.addClass("clone-page").css({
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      zIndex: 0
    });
    $("html").append(clone);

    // Elevar la capa actual (la que se moverá)
    $("body").css("z-index", 1);

    // Animación de salida
    $("body").addClass("slide-out-left");

    setTimeout(() => {
      window.location.href = link;
    }, 600); // igual al transition duration del CSS
  }
});

  // 🎬 Reproducir video YouTube al hacer clic en el logo
  const $logoContainer = $(".container-logo");
  const $modal = $("#videoModal");
  const $overlay = $("#videoModalOverlay");
  const $closeBtn = $("#videoModalClose");
  const $iframe = $("#youtubePlayer");

  if ($logoContainer.length) {
    const videoId = $logoContainer.data("video") || "_duG8GOUoTw";

    function buildYoutubeEmbedUrl(id) {
      // autoplay + mute = asegura reproducción automática incluso en móviles
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0&modestbranding=1`;
    }

    function openModal() {
      $iframe.attr("src", buildYoutubeEmbedUrl(videoId));
      $modal.addClass("video-modal--visible").attr("aria-hidden", "false");
      $("html, body").css("overflow", "hidden");
      $closeBtn.focus();
    }

    function closeModal() {
      $iframe.attr("src", ""); // Detener el video
      $modal.removeClass("video-modal--visible").attr("aria-hidden", "true");
      $("html, body").css("overflow", "");
      $logoContainer.focus();
    }

    $logoContainer.on("click", openModal);
    $closeBtn.on("click", closeModal);
    $overlay.on("click", closeModal);

    $(document).on("keydown", function(e) {
      if (e.key === "Escape" && $modal.hasClass("video-modal--visible")) {
        closeModal();
      }
    });
  }

  // === SLIDER CREW ===
  let currentSlide = 0;
  const slides = $(".slide");
  const totalSlides = slides.length;

  $("#next").on("click", function() {
    const prevSlide = slides.eq(currentSlide);
    currentSlide = (currentSlide + 1) % totalSlides;
    const nextSlide = slides.eq(currentSlide);

    prevSlide.removeClass("current").addClass("exit-left");
    nextSlide.addClass("current enter-right");

    setTimeout(() => {
      prevSlide.removeClass("exit-left");
      nextSlide.removeClass("enter-right");
    }, 600); // igual al CSS transition
  });

  $("#prev").on("click", function() {
    const prevSlide = slides.eq(currentSlide);
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    const nextSlide = slides.eq(currentSlide);

    prevSlide.removeClass("current").addClass("exit-right");
    nextSlide.addClass("current enter-left");

    setTimeout(() => {
      prevSlide.removeClass("exit-right");
      nextSlide.removeClass("enter-left");
    }, 600);
  });

  // === TOGGLE MENU MOBILE ===
  $(".menu-toggle").on("click", function() {
    $(this).toggleClass("active");
    $(".menu-mobile").toggleClass("open");
  });
  // Cerrar menú cuando se selecciona un icono
  $(".menu-mobile a").on("click", function () {
    $(".menu-mobile").removeClass("open");
    $(".menu-toggle").removeClass("active");
  });
  
});
