/* Smooth Navigation */
$(document).ready(
    function() {
        'use strict';
        $('.nav').onePageNav({
            currentClass: 'current',
            scrollSpeed: 1000,
            easing: 'easeInOutQuint'
        });
        $(window).bind(
            'scroll',
            function(e) {
                var scrollPos = $(window).scrollTop();
                scrollPos > 220 ? $('.sticky-section').addClass(
                    'nav-bg') : $('.sticky-section').removeClass(
                    'nav-bg');
            });
    });

/* NiceScroll */
$(document).ready(function() {
    'use strict';
    $("html").niceScroll({
        cursorcolor: '#E74C3C',
        cursoropacitymin: '1',
        cursorborder: '0px',
        cursorborderradius: '0px',
        cursorwidth: '5px',
        cursorminheight: 60,
        horizrailenabled: false,
        zindex: 1090
    });
});

/* Backgroung slider */
$(window).ready(function() {
    'use strict';
    $.vegas('slideshow', {
        backgrounds: [{
            src: 'images/playing_cho.jpg',
            fade: 1000
        }, {
            src: 'images/playing_flor.jpg',
            fade: 1000
        }, {
            src: 'images/playing_seba.jpg',
            fade: 1000
        }, {
            src: 'images/playing_pablo.jpg',
            fade: 1000
        }]
    })();
});

/* Scroll into viewPort Animation */
$(document).ready(
    function() {
        'use strict';
        $('.animated').appear(
            function() {
                var element = $(this),
                    animation = element
                    .data('animation'),
                    animationDelay = element
                    .data('animation-delay');
                if (animationDelay) {

                    setTimeout(function() {
                        element.addClass(animation + " visible");
                    }, animationDelay);

                } else {
                    element.addClass(animation + " visible");
                }
            });
    });

/* Fitvids init */
$(document).ready(function() {
    'use strict';
    $('.video-content').fitVids();
});

/* BXslider */
$(document).ready(function() {
    'use strict';
    $('.bxslider').bxSlider({
        video: true,
        useCSS: false
    });
});

/* ZozoAccordion */
$(document).ready(function() {
    'use strict';
    $("#zozoAccordion").zozoAccordion({
        active: 0,
        responsive: true,
        orientation: "horizontal",
        theme: "black",
        shadows: true,
        bordered: true,
        slider: true,
        rounded: false,
        width: 1600,
        height: 640,
        dotNav: false,
        containerHeight: 320,
        headerSize: 68,
        animation: {
            duration: 400,
            easing: "easeInOutQuart"
        },
        showIcons: true,
        headerFontSize: 1.6
    });
});

/* Contact */
$(document).ready(function() {
    'use strict';
    $('form.contact-form').on('submit', function(e) {
        $.post('contact/contact.php', $(this).serialize(), function(response) {
            if ($('.confirmation p').html() != "") {
                $('.confirmation p').replaceWith('<p><span class="fa fa-check"></span></p>');
            }
            $('.confirmation p').append(response).parent('.confirmation').show();
            $('html, body').animate({
                scrollTop: $('#section-contact').offset().top
            }, {
                duration: 800,
                queue: true
            });
            $('.form-item').val('');
            setTimeout(function() {
                $('.confirmation').hide();
            }, 8000);
        });
        e.preventDefault();
    });
});