$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      }
  })
});
// $(document).ready(function(){
//     $('.your-class').slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: false,
//         //margin:10,
//         autoplaySpeed: 2000,
//       });
          
// })