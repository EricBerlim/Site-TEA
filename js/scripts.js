$( document ).ready(function() {

  // Progress Bar
  let containerA = document.getElementById("circleA");

  let circleA = new ProgressBar.Circle(containerA, {

    color: 'white',
    strokeWidth: 8,
    duration: 2000,
    from: { color: '#aaa'},
    to: { color: 'rgb(177, 6, 230)'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 100);
      circle.setText(value);
    }

  });

  let containerB = document.getElementById("circleB");

  let circleB = new ProgressBar.Circle(containerB, {

    color: 'white',
    strokeWidth: 8,
    duration: 2800,
    from: { color: '#aaa'},
    to: { color: 'rgb(177, 6, 230)'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 82);
      circle.setText(value);
    }

  });

  let containerC = document.getElementById("circleC");

  let circleC = new ProgressBar.Circle(containerC, {

    color: 'white',
    strokeWidth: 8,
    duration: 2900,
    from: { color: '#aaa'},
    to: { color: 'rgb(177, 6, 230)'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 98);
      circle.setText(value);
    }

  });

  let containerD = document.getElementById("circleD");

  let circleD = new ProgressBar.Circle(containerD, {

    color: 'white',
    strokeWidth: 8,
    duration: 2500,
    from: { color: '#aaa'},
    to: { color: 'rgb(177, 6, 230)'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 55);
      circle.setText(value);
    }

  });

  // Iniciando Loaders quando o usuário chegar no elemento
  let dataAreaOffset = $('#data-area').offset();
  // Stop serve para a animação não carregar mais que uma vez
  let stop = 0;

  $(window).scroll(function (e) {

    let scroll = $(window).scrollTop();

    if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);

      stop = 1;
    }

  });

  // Parallax
  // setTimeout serve para carregar primeiro as imagens
  setTimeout(function() {
    $('#data-area').parallax({imageSrc: 'img/home.jpg'});
  }, 200);

  // Filtro Formas
  $('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'triangle-btn') {
      eachBoxes('triangle', boxes);
    } else if(type == 'circle-btn') {
      eachBoxes('circle', boxes);
    } else if(type == 'square-btn') {
      eachBoxes('square', boxes);
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

  // Scroll para as Seções
  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let servicesSection = $('#services-area');
  let teamSection = $('#team-area');
  let portfolioSection = $('#portfolio-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'cores-menu') {
      scrollTo = aboutSection;
    } else if(btnId == 'services-menu') {
      scrollTo = servicesSection;
    } else if(btnId == 'team-menu') {
      scrollTo = teamSection;
    } else if(btnId == 'portfolio-menu') {
      scrollTo = portfolioSection;
    } else if(btnId == 'contact-menu') {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });

});