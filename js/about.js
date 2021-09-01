//xu ly an hien gio hang
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