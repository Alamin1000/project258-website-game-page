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

        

})(jQuery);




$(document).ready(function(){

  // preloader
  $("#preloader").fadeOut(500);

})











