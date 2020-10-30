$ (function() {

  let testimonials__slider = $("#testimonials__slider");
      
      testimonials__slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: true,
      dots: false,
      vertical:false,
      verticalSwiping:false,
      fade:true,
      
  });
});