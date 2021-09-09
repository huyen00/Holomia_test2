$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
   
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    
  });
});

$(document).ready(function(){
  $('.m').click(function(envent){
    const id = this.id.split('_')[1];
    let ckeckId = $(this).attr('class').split(' ');
    if(checkId.find(e=>e=='n')=='n'){
      $(this).removeClass('n');
      $('.m').removeClass('n');
    }
    else{
      $(this).addClass('n');
      $('.m').addClass('n');
    }
    
  });
});


//xu lý khi bấm read more thì show comment và thay chữ read more thành -show less
$(document).ready(function(){
  $('.readcom-about').click(function(enven){
    const id = this.id.split('_')[1];
    var check= $(this).attr('class').split(' ');
    if(check.find(e=>e=='readabout')=='readabout'){
      $(this).removeClass('readabout');
      $(`#comabout_${id}`).removeClass('showcomment-about');
      $(`#read_${id}`).text('+ READ MORE');
    }
    else{
      $(this).addClass('readabout');
      $(`#comabout_${id}`).addClass('showcomment-about');
      $(`#read_${id}`).text('- SHOW LESS');
    }
  })
})

//xử lý hình ảnh khi đc click vào 
// function zoomout(image){
//   var src=image.src //lay duong dan cua arnh dc click
//   document.getElementById('background-owl').style.backgroundImage="url("+src+")";
// }


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:7,
        
        responsive:{
            0:{
              items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});



// let button = document.querySelectorAll('.read')[0];
// button.addEventListener('click', () => {
//   let item = document.querySelectorAll('.comment')[0];
//   let before = document.querySelectorAll('.before')[0];
//   if(item.classList.contains('commentActive')){
//     item.classList.remove('commentActive');
//   } else{
//     item.classList.add('commentActive');
//   }

//   if(before.classList.contains('beforeActive')){
//     before.classList.remove('beforeActive');
//   } else{
//     before.classList.add('beforeActive');
//   }
// })

//xử lý read more comment
$(document).ready(function(){
  $('.rea').click(function(enven){
    const id = this.id.split('_')[1];
    var check= $(this).attr('class').split(' ');
    if(check.find(e=>e=='readmore')=='readmore'){
      $(this).removeClass('readmore');
      $(`#com_${id}`).removeClass('commentActive');
      $(`#back_${id}`).removeClass('gr');
      $(`#rea_${id}`).text('+ READ MORE');
    }
    else{
      $(this).addClass('readmore');
      $(`#com_${id}`).addClass('commentActive');
      $(`#back_${id}`).addClass('gr');
      $(`#rea_${id}`).text('+ READ MORE');
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
//xu ly tang giam sl
$(document).ready(function(){
  $('.btn-tang').click(function(){
          var $buttontang = $('.btn-tang');
          var $inputt = $('.input-pice');
          $inputt.val( parseInt($inputt.val()) + 1 ); // `parseInt` converts the `value` from a string to a number
    });
    $('.btn-giam').click(function(){
      var $buttontang = $('.btn-tang');
      var $inputt = $('.input-pice');
      $inputt.val( parseInt($inputt.val()) - 1 );
      if($inputt<0){
       $('.input-cart')==0;
      }
    });
  
  
});