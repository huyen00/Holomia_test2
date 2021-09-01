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
//xu ly an hien gio hang
$(document).ready(function(){
    $('.giohang').click(function(event){
      $('.form-cart').addClass('show');
     console.log('ji');
    });
    $('.btn-close').click(function(event){
      $('.form-cart').removeClass('show');
    });
    $('.container-fluid').click(function(event){
      $('.form-cart').removeClass('show');
    });
  });

  $(document).ready(function(){
      new WOW().init();
    });