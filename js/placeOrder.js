//xu ly an hien 
// $(document).ready(function(){
//     //an di
//       $('.content-pay').slideUp();
//       $('.Paypal a').on('click',function(event){
//           event.preventDefault();
//           $(this).next().slideToggle();
//       });
// });
$(document).ready(function(){
    $('.Paypal a').click(function(enven){
      const id = this.id.split('_')[1];
      var check= $(this).attr('class').split(' ');
      if(check.find(e=>e=='show')=='show'){
        $(this).removeClass('show');
       
        $(`#content_${id}`).removeClass('showpay');
       
      }
      else{
        $(this).addClass('show');
        $(`#content_${id}`).addClass('showpay');
       
      }
    });
   
  });

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