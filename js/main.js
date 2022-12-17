(function ($) {
  "use strict";

  // owl-carousel
  $('.banner-slider-active').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    responsiveClass:true,
    nav:false,
    dots:true,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
  });


  // news-button
  $('.news-expand-button').click(function(){
    $(this).closest('.news-single').addClass('active');
    let height = $(this).closest('.news-single').find('.news-s__body__inner').outerHeight();
    $(this).closest('.news-single').find('.news-s__body').css('height', (height + 'px'));
  });

        

})(jQuery);




$(document).ready(function(){

  // preloader
  $("#preloader").fadeOut(500);

})











