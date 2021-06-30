//  Preloader
jQuery(window).on("load", function() {
  $('#preloader').fadeOut(500);
  $('#main-wrapper').addClass('show');
});


(function($) {

  var headerHeight = parseInt($('.onepage').css('height'), 10);
  $(".scroll").unbind().on('click', function(event) {
    event.preventDefault();

    if (this.hash !== "") {
      var hash = this.hash;
      var seactionPosition = $(hash).offset().top;
      var headerHeight = parseInt($('.onepage').css('height'), 10);


      $('body').scrollspy({
        target: ".scroll-nav",
        offset: headerHeight + 2
      });

      var scrollTopPosition = seactionPosition - (headerHeight);

      $('html, body').animate({
        scrollTop: scrollTopPosition
      }, 800, function() {

      });
    }
  });
  $('body').scrollspy({
    target: ".scroll-nav",
    offset: headerHeight + 2
  });

  $('.header').css('height', '');
  var headerHeight = $('.header').height();
  $('.header').css('height', headerHeight);

  //  Header fixed
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.header').addClass("animated slideInDown fixed"), 3000;
    } else {
      $('.header').removeClass("animated slideInDown fixed"), 3000;
    }
  });
  $('select').niceSelect();

})(jQuery);;
