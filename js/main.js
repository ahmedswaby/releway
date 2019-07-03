/* global $ */

$(document).ready(function () {
    // make navbar have color when you scroll 
    $(window).scroll(function () {

        if ($(window).scrollTop() <= 100) {
            $('nav.navbar').css({
                'background-color': 'transparent',
            })
            $('.scroll-up').fadeOut(700)
        } else {
            $('nav.navbar').css({
                'background-color': 'rgba(0, 0, 0, 0.5)',
                'padding': '7px'
            });
            $('.scroll-up').fadeIn(700)
        }

        // count up in projects section
        if ($(window).scrollTop() >= 600) {

            $({
                countNum: $('.counter1').text()
            })
                .animate({
                    countNum: 284
                }, {
                        duration: 2000,
                        easing: 'linear',
                        step: function () {

                            $('.counter1').text(Math.ceil(this.countNum));
                        },
                        complete: function () {
                            $('.counter1').text("284");
                        }
                    });

            $({
                countNum: $('.counter2').text()
            })
                .animate({
                    countNum: 98
                }, {
                        duration: 2000,
                        easing: 'linear',
                        step: function () {

                            $('.counter2').text(Math.ceil(this.countNum));
                        },
                        complete: function () {
                            $('.counter2').text("98");
                        }
                    });


            $({
                countNum: $('.counter3').text()
            })
                .animate({
                    countNum: 560
                }, {
                        duration: 2000,
                        easing: 'linear',
                        step: function () {

                            $('.counter3').text(Math.ceil(this.countNum));
                        },
                        complete: function () {
                            $('.counter3').text("560");
                        }
                    });


            $({
                countNum: $('.counter4').text()
            })
                .animate({
                    countNum: 9
                }, {
                        duration: 2000,
                        easing: 'linear',
                        step: function () {

                            $('.counter4').text(Math.ceil(this.countNum));
                        },
                        complete: function () {
                            $('.counter4').text("9");
                        }
                    });

            // add class active depend on data scroll 

            $('section').each(function () {

                if ($(window).scrollTop() > $(this).offset().top - 10) {

                    var scrId = $(this).attr('id');

                    $('a[data-scroll="' + scrId + '"]').parent('li').addClass('active').siblings().removeClass('active');
                }
            })
        }
    })
    // latest work section
    $('.grid').isotope({

        itemSelector: '.col-lg-4',
        layoutMode: 'fitRows'
    });
    $('.filter ul li').click(function () {

        $('.filter ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.grid').isotope({
            filter: selector
        });
        return false;

    });

    // magnific Popup
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true, // set to true to enable gallery

            preload: [1, 1], // read about this option in next Lazy-loading section


            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
    });

    // owl carousel for team slider
    $('.our-team .owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            }
        }
    })
    $('.testimonials .owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: false
            }
        }
    })


    var owl = $('.partners .owl-carousel');
    owl.owlCarousel({

        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        nav: false,
        dots: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 4,
                nav: false
            }
        }
    });


    // carousel controls animation for process section 
    // $('.process').on('mouseenter', function () {
    //     $('.carousel-procces a.carousel-control-prev').css({
    //         'left': 0,
    //     });
    //     $('.carousel-procces a.carousel-control-next').css({
    //         'right': 0
    //     })
    // })
    // $('.process').on('mouseleave', function () {
    //     $('.carousel-procces a.carousel-control-prev').css({
    //         'left': '-400px'
    //     });
    //     $('.carousel-procces a.carousel-control-next').css({
    //         'right': '-400px'
    //     })
    // })


    /* going to specific place by scrolling */
    $('.navbar li a').click(function (e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 500);

        $(this).parent('li').addClass('active').siblings().removeClass('active');

    });

    $('.scroll-up').click(function () {

        $('html, body').animate({
            scrollTop: 0
        }, 700)
    })

})