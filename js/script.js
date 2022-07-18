// ---------------БУРГЕР МЕНЮ------------------- //
$(document).ready(function () {
    $('#nav-title').click((e) => {
        $('#fon-info').slideToggle(),
        $("#nav-menu").slideToggle(500, "linear")
    })
});


// --------------------СКРОЛЛ ШАПКИ----------------------- //
$(window).on("scroll", function () {
    console.log($(window).scrollTop(), $('#navigation').attr("class"))

    $('#navigation').toggleClass('scrolled', $(window).scrollTop() > 1)
});



// ----------------ПЛАВНЫЙ СКРОЛЛ К ЯКАРЮ -------------------//
$("a.nav-menu__link").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});

$("a.logo").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});

// --------------------СЛИК СЛАЙД----------------------- //
$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        waitForAnimate: true,
        wariableWidth: true,
        easing: 'easeOutCirc',

    });


});

