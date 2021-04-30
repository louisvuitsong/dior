$('.perfume-main > div').on({
  mouseenter:function(){
    $(this).find('video')[0].play();
  },
  mouseleave:function(){
    $(this).find('video')[0].pause();
  }
});


$(".regular").slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,

  fade:true,
  speed:1000

  // centerMode: true,
  // vertical: true
  });