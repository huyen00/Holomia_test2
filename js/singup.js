//xu ly menu
$(document).ready(function(){
  $('#tabmenu').click(function(even){
   $('.list-menu').addClass('menuuu');
   $('.nav-item').addClass('tabmenu-item');
    
  })
})
//xử lý ẩn hiện giỏ hàng
$(document).ready(function(){
    $('.giohang').click(function(event){
      $('.form-cart').addClass('show');
    });
    $('.btn-close').click(function(event){
      $('.form-cart').removeClass('show');
    });
    $('.container-fluid').click(function(event){
      $('.form-cart').removeClass('show');
    });
  });
  