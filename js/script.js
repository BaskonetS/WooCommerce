$(document).ready(function() {

  $('.header-burger').click(function(event) {
    $('.header-burger, .header__box2').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.header__nav').click(function(){
    $('.header-burger, .header__box2').removeClass('active');
    $('body').removeClass('lock');
  });
  

});