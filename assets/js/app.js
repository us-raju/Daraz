$(function () {
  //    Home banner slider js start
  $(".home_banner_slider").slick({
    PrevArrows: '<i class="home_banner_slider_arrow fa-solid fa-chevron-right"></i>',
    NextArrows: '<i class="home_banner_slider_arrow fa-solid fa-chevron-left"></i>',
    dots: true,
    dotsClass: "home_banner_dots",
  });
  //    Home banner slider js end

  // tooltip start
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  // tooltip end

  // the final countdown start
   $("#clock").countdown("2030/10/10", function (event) {
     var $this = $(this).html(
       event.strftime(
         "" +
           '<div class="deals_timer_param"><span>%D</span></div>' +
           '<span class="deals_timer_clone">:</span>' +
           '<div class="deals_timer_param"><span>%H</span></div>' +
           '<span class="deals_timer_clone">:</span>' +
           '<div class="deals_timer_param"><span>%S</span></div>'
       )
     );
   });
  // the final countdown end

  // xoom js start 
  $(".xzoom").xzoom();

  // xoom js end
});
