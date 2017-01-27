jQuery( document ).ready(function( $ ) {

    $.stellar({
        horizontalScrolling: false
    });


    $('.guiding-slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
        nextArrow: '<div class="guiding-slider__arrow-right"></div>',
        prevArrow: '<div class="guiding-slider__arrow-left"></div>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    });



    $('#menu').click(function(e) {
        e.preventDefault();
        $('#drawer').toggleClass('open');
        $('.meganav > li > a').removeClass('active');
    });

    $('#close').click(function(e) {
        e.preventDefault();
        $('#drawer').removeClass('open');
        $('.meganav > li > a').removeClass('active');
    });
    $(window).resize(function(){
        if ($(window).width() > 680) {
            $('#drawer').removeClass('open');
            $('.meganav > li > a').removeClass('active');
        }
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 58) {
            $('main').addClass('fixed');
            $('header').addClass('fixed');
        } else {
            $('main').removeClass('fixed');
            $('header').removeClass('fixed');
        }
    });
    $('.meganav > li > a').click(function(e) {
        if ($(window).width() <= 680) {
            e.preventDefault();
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).parent().find('ul').removeClass('active');
            } else {
                $('.meganav a').removeClass('active');
                $('.meganav ul').removeClass('active');
                $(this).addClass('active');
                $(this).parent().find('ul').addClass('active');
            }
        }
    });

    $('.top-video__child').each(function () {
        $(this).addClass('appear');
    });

    $('.watch-video__icon').click(function() {
        $('.video-popup').addClass('show');
        return false;
    });


    $('.video-popup__close').click(function() {
        $('.video-popup').removeClass('show');
        return false;
    });

    var kolStud = document.getElementsByClassName('info-icons__number')[0].innerHTML;
    document.getElementsByClassName('info-icons__number')[0].innerHTML = 0;


    // for ( var i = 1; i< kolStud; i++) {
    //     setTimeout(function () {
    //         document.getElementsByClassName('info-icons__number')[0].innerHTML = i;
    //     }, i * 1000);
    // }





    function next() {
        var el = document.getElementsByClassName('info-icons__number')[0];
        if (+el.innerHTML < 26) {

            var temp = (+el.innerHTML) + 1;
            if ( $('.info-icons__icons-students div:eq(0)').hasClass('appear') === false ) {
                $('.info-icons__icons-students div:eq(0)').addClass('appear');
            }
            $('.info-icons__icons-students div:eq('+temp+')').addClass('appear');
            el.innerHTML = (+el.innerHTML) + 1;
            setTimeout(function () {
                next();
            }, 150);
        }
    };




    if ($('.info-icons__icons').length > 0 ) {
        var infoIconsOffsetTop = $('.info-icons__icons').offset().top;
        var infoIconsHeight = $('.info-icons__icons').height();
    } else {
        var infoIconsOffsetTop = 0;
        var infoIconsHeight = 0;
    }

    if ($('.info-icons__icons-students').length > 0 ) {
        var studentsOffsetTop = $('.info-icons__icons-students').offset().top;
        var studentsHeight = $('.info-icons__icons-students').height();
    } else {
        var studentsOffsetTop = 0;
        var studentsHeight = 0;
    }

    if ($('.s-boxes').length > 0 ) {
        var boxOffsetTop = $('.s-boxes').offset().top;
        var boxHeight = $('.s-boxes').height();
    } else {
        var boxOffsetTop = 0;
        var boxHeight = 0;
    }


    var windowHeight = $(window).height();



    $(window).scroll(function () {
        var currentOffset = $(this).scrollTop();
        if ( currentOffset + windowHeight - infoIconsHeight > infoIconsOffsetTop && $('.info-icons__icons').length > 0 && $('.info-icons__icons').hasClass('appear') === false ) {
            $('.info-icons__icons').addClass('appear');
        }
        if ( currentOffset + windowHeight - studentsHeight > studentsOffsetTop && $('.info-icons__icons-students').length > 0 && $('.info-icons__icons-students').hasClass('appear') === false ) {
            // $('.info-icons__icons-students div').each(function () {
            //     $(this).addClass('appear');
            //
            // });
            next();
        }

        if ( currentOffset + windowHeight + (boxHeight/2) > boxOffsetTop && $('.s-boxes').length > 0 && $('.s-boxes').hasClass('appear') === false ) {
            $('.s-boxes').addClass('appear');
        }



    });




});