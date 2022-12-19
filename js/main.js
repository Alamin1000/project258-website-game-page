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
    let thisIs = this;
    let action = thisIs.getAttribute('action');

    if (action == 0) {

      $(thisIs).closest('.news-single').addClass('active');
      let height = $(thisIs).closest('.news-single').find('.news-s__body__inner').outerHeight();
      $(thisIs).closest('.news-single').find('.news-s__body').css('height', (height + 'px'));
      thisIs.innerHTML = 'SHOW LESS';
      thisIs.setAttribute('action','1')

    } else {

      $(thisIs).closest('.news-single').removeClass('active');
      $(thisIs).closest('.news-single').find('.news-s__body')[0].style.height = null;
      thisIs.innerHTML = 'READ MORE';
      thisIs.setAttribute('action','0')

    }

  });

        

})(jQuery);




$(document).ready(function(){

  // preloader
  $("#preloader").fadeOut(500);

})











