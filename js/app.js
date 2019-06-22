$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });
    
    function checkScroll(scrollOffset) {
        if(scrollOffset >= introH - header.height() - 1) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth Scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

       var $this = $(this),
           blockId = $this.data("scroll"),
           blockOffset = $(blockId).offset().top;

       $("#nav a").removeClass("active");
        $this.addClass("active");

       $("html, body").animate({
           scrollTop: blockOffset - header.height()
       }, 500);
    });


    /* Menu nav toggle */

    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    /* Hidden menu nav toggle */
    $(".nav__link").on('click', function () {
        $("#nav_toggle").click()
    });


});