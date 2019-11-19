$(document).ready(function(){

  $(document).on('click', '.header-top-burger' , function(){
    $(this).toggleClass('header-top-burger_open');
    $('.header-down').fadeToggle('fast').css('display', 'flex');
  })


  function resizer(wid) {
    if(wid < 1100){
      $('.header-top-linklist').detach().appendTo('.header-down');
      $('.header-bot').detach().appendTo('.header-down');
      $('.header-top-burger').show();
    } else {
      $('.header-top-linklist').detach().insertAfter('.header-top-logo');
      $('.header-bot').detach().insertAfter('.header-top');
      $('.header-top-burger').hide();
      $('.header-down').hide()
    }
    $('.header-top-burger').removeClass('header-top-burger_open');
    $('.header-down').fadeOut('fast')
  }
  resizer(screen.width);

  $(window).resize(function () {
    var ww = screen.width;

    resizer(ww);
  })

});