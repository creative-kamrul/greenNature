// sticky menu

$(window).scroll(function () {
    var scrollamount = $(window).scrollTop()

    if (scrollamount > 300) {
        $(".fixedmenu").addClass("fixed")
    } else {
        $(".fixedmenu").removeClass("fixed")
    }

})



$('#banner_part').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left preA" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right nxtA" aria-hidden="true"></i>',


    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




$('.venobox').venobox();






//tweeter part slider

$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: '<i class="fa fa-angle-left prvAw" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right nxtAw" aria-hidden="true"></i>',


    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
