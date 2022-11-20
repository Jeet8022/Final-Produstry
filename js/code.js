$(function () {

//banner slick

$("#banner").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,

});

$(".servciceSlider").slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
        
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});

  $(".gallery").slick({

    slidesToScroll: 1,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(".slickSlider").slick({
    slidesToScroll: 1,
    slidesToShow:3,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(".testimonial-text").slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    fade: true,
    autoplaySpeed: 3500,
    asNavFor: ".testimonial-img",

  });

    $(".testimonial-img").slick({
      slidesToScroll: 1,
      slidesToShow: 3,
      arrows: false,
      centerMode:true,
      centerPadding: 0,
      asNavFor: ".testimonial-text",
    });

      $("#miniSlider").slick({

        slidesToScroll: 1,
        slidesToShow: 5,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        autoplaySpeed: 4500,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
    
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },

          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },

    
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        
      });

      $(".team-chart").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        
        autoplaySpeed: 4500,
        centerMode: true,
        centerPadding: 0,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
    
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },

          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },

    
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        


      });

      $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

});