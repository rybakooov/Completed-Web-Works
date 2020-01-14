$(document).ready(function(){
  $(document).on('click', '.header__burger', function(){
    $(this).toggleClass('active');
    $('.header__logo').toggleClass('hide');
    $('.header-mobile').toggleClass('active');
    $('.wrapper').toggleClass('oveflow-body');
  })
});