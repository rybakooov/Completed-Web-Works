function flori() {
  function init() {
    owl();
    basketCount();
    columnConform();
  }

  function setConformingHeight(el, newHeight) {
    el.data("originalHeight", (el.data("originalHeight") == undefined) ? (el.height()) : (el.data("originalHeight")));
    el.height(newHeight);
  }

  function getOriginalHeight(el) {
    return (el.data("originalHeight") == undefined) ? (el.height()) : (el.data("originalHeight"));
  }

  function columnConform() {
    var idBlock = '[data-auto-height="Y"]';

    if ($(idBlock).length)
      $(idBlock).each(function () {
        var currentTallest = 0,
          currentRowStart = 0,
          currentDiv = 0,
          rowDivs = [];

        var $el = $(this);
        $el.find('.tile').each(function () { //FOR CLASS !!! TILE !!!
          var $el = $(this);
          var topPosition = $el.position().top;

          if (currentRowStart != topPosition) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);

            rowDivs.length = 0;
            currentRowStart = topPosition;
            currentTallest = getOriginalHeight($el);
            rowDivs.push($el);
          }
          else {
            rowDivs.push($el);
            currentTallest = (currentTallest < getOriginalHeight($el)) ? (getOriginalHeight($el)) : (currentTallest);

          }
          for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
        });
      });
  }

  function basketCount() {

    if ($('.btn-product-count').length) {
      $('.btn-product-count').on('click', function () {
        var objCount = $(this).parent().find('.product-count'),
          num = +objCount.val(),
          dataProduct = $(this).attr("data-product");

        if (dataProduct == "plus") {
          num++;
          $(objCount).val(num);
        } else if (dataProduct == "minus") {
          num--;
          objCount.val(num);
        }

        if (num < 1 || isNaN(num)) {
          objCount.val(1);
        }
      });

      $('.product-count').on('keyup', function () {
        var num = +$(this).val();
        if (num < 1 || isNaN(num)) $(this).val(1);
      });
    }
  }

  function owl() {
    if ($('#carousel-top').length) {
      $('#carousel-top').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        nav: false
      });
    }

    if ($('#new-product-carousel').length) {
      $('#new-product-carousel').owlCarousel({
        items: 4,
        loop: false,
        margin: 30,
        autoplay: false,
        dots: false,
        navText: ['<div class="carousel-prev"></div>', '<div class="carousel-next"></div>'],
        navContainer: $('#new-product-carousel').parent().find('.carousel-next-prev')
      });
    }

    if ($('#best-product-carousel').length) {
      $('#best-product-carousel').owlCarousel({
        items: 4,
        loop: false,
        margin: 30,
        autoplay: false,
        dots: false,
        navText: ['<div class="carousel-prev"></div>', '<div class="carousel-next"></div>'],
        navContainer: $('#best-product-carousel').parent().find('.carousel-next-prev')
      });
    }
  }

  return {
    init: init()
  }
}

$(function () {
  var initFlori = new flori();
  initFlori.init;
});