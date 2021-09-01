$(document).ready(function(){
    $('.btn-tang').click(function(){
        const id = this.id.split('_')[1];
        var check= $(this).attr('class').split(' ');
        if(check.length==5){
            var $buttontang = $(`#tang_${id}`);
            var $inputt = $(`#cart_${id}`);
            $(`#cart_${id}`).val( parseInt($inputt.val()) + 1 ); // `parseInt` converts the `value` from a string to a number
        }
      });
      $('.btn-giam').click(function(){
        const id = this.id.split('_')[1];
        var check= $(this).attr('class').split(' ');
        if(check.length==5){
            var $buttontang = $(`#giam_${id}`);
            var $inputt = $(`#cart_${id}`);
            $(`#cart_${id}`).val( parseInt($inputt.val()) - 1 ); // `parseInt` converts the `value` from a string to a number
        }
      });
    
    
});
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