$( document ).ready(function() {

  // Filtro
  $('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'um-btn') {
      eachBoxes('um', boxes);
    } else if(type == 'dois-btn') {
      eachBoxes('dois', boxes);
    } else if(type == 'tres-btn') {
      eachBoxes('tres', boxes);
    } else {
      eachBoxes('all', boxes);
    }
  });

  function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

  // Ir para as Seções
  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let coresSection = $('#tipo-area');
  let alimentosSection = $('#tipo-area');
  let animaisSection = $('#tipo-area');
  let formasSection = $('#tipo-area');
  let esportesSection = $('#tipo-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'cores-menu') {
      scrollTo = coresSection;
    } else if(btnId == 'alimentos-menu') {
      scrollTo = alimentosSection;
    } else if(btnId == 'animais-menu') {
      scrollTo = animaisSection;
    } else if(btnId == 'formas-menu') {
      scrollTo = formasSection;
    } else if(btnId == 'esportes-menu') {
      scrollTo = esportesSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });
});