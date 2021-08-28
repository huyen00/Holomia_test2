$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        600:{
            items:4
        }
    }
  });
  
});

//xử lý hình ảnh khi đc click vào 
function zoomout(image){
  var src=image.src //lay duong dan cua arnh dc click
  document.getElementById('background-owl').style.backgroundImage="url("+src+")";
}


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        
        responsive:{
            0:{
                items:1
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



let button = document.querySelectorAll('.read')[0];
button.addEventListener('click', () => {
  let item = document.querySelectorAll('.comment')[0];
  let before = document.querySelectorAll('.before')[0];
  if(item.classList.contains('commentActive')){
    item.classList.remove('commentActive');
  } else{
    item.classList.add('commentActive');
  }

  if(before.classList.contains('beforeActive')){
    before.classList.remove('beforeActive');
  } else{
    before.classList.add('beforeActive');
  }
})

$(document).ready(function(){
  $('.rea').click(function(enven){
    $('.comment').addClass('commentActive');
     $('.backgr').addClass('gr');
  });
 
});
