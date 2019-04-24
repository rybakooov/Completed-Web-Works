$(document).ready(function(){

    var quantitySlide = $(".slider1").children('.slider1__img').length;
    var currentSlide = 1;
    $(".sl-counter").text(currentSlide + " / " + quantitySlide);



    $(".mouse-block").click(function (event) {
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $("#tg1").click(function(){
        if($("#tg2").hasClass("toggle-block__a_active")) {
            if($(window).width() < 768){
                $('.store_active').slick('unslick');
            }
            $("#tg1").addClass("toggle-block__a_active");
            $("#tg2").removeClass("toggle-block__a_active");
            $("#st1").addClass("store_active");
            $("#st2").removeClass("store_active");
            if($(window).width() < 768){
                $('.store_active').slick({adaptiveHeight: true});
            }
        }
    })

    $("#tg2").click(function(){
        if($("#tg1").hasClass("toggle-block__a_active")) {
            if($(window).width() < 620){
                $('.store_active').slick('unslick');
            }
            $("#tg2").addClass("toggle-block__a_active");
            $("#tg1").removeClass("toggle-block__a_active");
            $("#st2").addClass("store_active");
            $("#st1").removeClass("store_active");
            if($(window).width() < 620){
                $('.store_active').slick({adaptiveHeight: true});
            }
        }
    })



    var stringSrcSlider = "slider1__img1";
    $(".prev").click(function(){
        if(currentSlide == 1){
            currentSlide = quantitySlide;
        } else currentSlide--;
            $(".sl-counter").text(currentSlide + " / " + quantitySlide);
            $(".slider1__img_a").removeClass("slider1__img_a");
            $(".slider1__img" + currentSlide).addClass("slider1__img_a");
        }
    );
    $(".next").click(function(){
        if(currentSlide == quantitySlide){
            currentSlide = 1;
        } else currentSlide++;
            
            $(".sl-counter").text(currentSlide + " / " + quantitySlide);
            $(".slider1__img_a").removeClass("slider1__img_a");
            $(".slider1__img" + currentSlide).addClass("slider1__img_a");
        }
    );



    

    $(".tab-stage__tab_1").click(function(){
        if(($(".tab-stage__tab_2").hasClass("tab-stage__tab_active")) || ($(".tab-stage__tab_3").hasClass("tab-stage__tab_active"))) {
            $(".tab-stage__tab_active").removeClass("tab-stage__tab_active");
            $(".preview-block_active").removeClass("preview-block_active");
            $(".tab-stage__tab_1").addClass("tab-stage__tab_active");
            $(".preview-block_1").addClass("preview-block_active");
        }
    })
    $(".tab-stage__tab_2").click(function(){
        if(($(".tab-stage__tab_1").hasClass("tab-stage__tab_active")) || ($(".tab-stage__tab_3").hasClass("tab-stage__tab_active"))) {
            $(".tab-stage__tab_active").removeClass("tab-stage__tab_active");
            $(".preview-block_active").removeClass("preview-block_active");
            $(".tab-stage__tab_2").addClass("tab-stage__tab_active");
            $(".preview-block_2").addClass("preview-block_active");
        }
    })
    $(".tab-stage__tab_3").click(function(){
        if(($(".tab-stage__tab_1").hasClass("tab-stage__tab_active")) || ($(".tab-stage__tab_2").hasClass("tab-stage__tab_active"))) {
            $(".tab-stage__tab_active").removeClass("tab-stage__tab_active");
            $(".preview-block_active").removeClass("preview-block_active");
            $(".tab-stage__tab_3").addClass("tab-stage__tab_active");
            $(".preview-block_3").addClass("preview-block_active");
        }
    })


    $(".order__phone").mask("+7(999)999-99-99");

    $(".toggle-nav__a").click(function(){
        $(".nav-bar").css("display", "flex");
    })
    $(".close").click(function(){
        $(".nav-bar").css("display", "none");
    })

    $(window).resize(function(){
        if($(window).width() < 620){
            $('.store_active').slick({adaptiveHeight: true});
            $('.cards').slick({adaptiveHeight: true});
            $('.preview').slick({adaptiveHeight: true});
        }
        if($(window).width() > 620){
            $('.store_active').slick('unslick');
            $('.cards').slick('unslick');
            $('.preview').slick('unslick');
        }
    });
    if($(window).width() < 620){
        $('.store_active').slick({adaptiveHeight: true});
        $('.cards').slick({adaptiveHeight: true});
        $('.preview').slick({adaptiveHeight: true});
    }
})
