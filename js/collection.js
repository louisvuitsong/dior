
//slide toggle
$('.plus').on('click',function(){
    $('.plus p').slideToggle(500);
});

//image push
let tagList = '';
for( let i=1; i<45; i++ ){
    tagList += "<li><img src='imgs/collection/model/look-" + i + "_width_3000.jpg' alt='model'></li>";
}
$('.looks ul').append(tagList);

//slick slide
$('.regular').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,

    // fade:true,
    // speed:1000

    // centerMode: true,
    // vertical: true
});

//Image popup
$('.looks li img').on('click',function(e){
    const imgSrc = $(this).attr('src');
    $('.looks-pop').addClass('active');
    $('.looks-pop p img').attr('src', imgSrc);
});
$('.looks-pop').on('click',function(){
    $('.looks-pop').removeClass('active');
});


/* //looks drag
    var mPos = {start:0, end:0}, num = 0;
    var looksUlWid = $('.looks ul').width();
    var looksLi = $('looks li');
    $('.looks ul').draggable({
        axis:'x',
        start:function(e){
            mPos.start = e.pageX;
        },
        drag:function(){},
        stop:function(e){
            mPos.end = e.pageX;
            dragAni();
        }
 

    });
    function dragAni(){
        var dragNum = Math.abs(mPos.start - mPos.end);
        if(dragNum > looksUlWid/3){
            if(mPos.start < mPos.end){
                //prev
                if( num > 0 ) num--;
            }else{
                //next
                if( num < ($('.looks ul li').length/3) -2 ) num++;
            }
        }
        $('.looks ul').animate({left: -100 * num + '%'})
    }

    //looks slide arrow
    $('.looks span').on('click',function(){
        $(this).css({transform:'scale(1.2)'});
        if($(this).index() == 1){
            if( num < ( $('.looks ul li').length/3 ) -2 ) num++;
        }else{
            if( num > 0 ) num--;
        }
        $('.looks ul').animate({left: -100 * num + '%'});
    }); */
