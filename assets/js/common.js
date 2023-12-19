// JavaScript Document

//スリック操作
$(function () {
  $('.slick').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite:true,
    dots: true,
    prevArrow: '<img src="../assets/image/arrow-1.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="../assets/image/arrow-2.png" class="slide-arrow next-arrow">',
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows:false,
        }
      }
    ]
  });
});
