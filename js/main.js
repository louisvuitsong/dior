$(function(){
    
    var delta, loop, num=0;
    $('.slidewrap').on('mousewheel DOMMouseScroll',function(e){
        delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

        clearTimeout(loop);
        loop = setTimeout(function(){
            if(delta<0){
                //down
                if(num < 2) num++;
            }else{
                //up
                 if(num > 0) num--;
                
            }
            $('.slidelist').css({
                transform:'translateX(' + -num +'00%)'
            });
            
            if( num == 0){
                $('.indicater div span').css({ left:'2px'});
                $('.indicater div span').text('Bags');
            }else if( num == 1){
                $('.indicater div span').css({ left:'110px'});
                $('.indicater div span').text('Perfume');
            }else{
                $('.indicater div span').css({ left:'218px'});
                $('.indicater div span').text('Collection');
            }
        },100)
       
    });

    
    var indi=0, indiNum=0;
    var slidelistLi = document.querySelectorAll('.slidelist li');
    var indiDiv = document.querySelector('.indicater div');
    const indiPoint = document.querySelectorAll('.indicater div a');
    var slideUl = document.querySelector('.slidelist');
    var indiArrow = document.querySelectorAll('.indicater > a');
    const locator = document.querySelector('.indicater div sapn');

    
    indiPoint.forEach(function(e){
        e.addEventListener('click',function(){

            indi = $(this).index();
            slideUl.style = `transform:translateX(${indi*-100}%)`;

            if( $(this).index() == 0){
                $('.indicater div span').css({ left:'2px'});
                $('.indicater div span').text('Bags');
            }else if( $(this).index() == 1){
                $('.indicater div span').css({ left:'110px'});
                $('.indicater div span').text('Perfume');
                
            }else{
                $('.indicater div span').css({ left:'218px'});
                $('.indicater div span').text('Collection');
            }
        });
    });



    /* indiPoint[0].addEventListener('click',function(){
        slideUl.style = `transform:translateX(0%)`;
        this.classList.add('active');
    });
    indiPoint[1].addEventListener('click',function(){
        slideUl.style = `transform:translateX(-100%)`;
        
    });
    indiPoint[2].addEventListener('click',function(){
        slideUl.style = `transform:translateX(-200%)`;
        
    }); */

    // indiArrow[0].addEventListener('click',function(){
    //     if(indiNum > -1) indiNum--;
    //     $('.indicater div a').removeClass('active');
    //     $('.indicater div a').eq(indiNum).addClass('active');
    //     slideUl.style = `transform:translateX(-${indiNum*100}%)`;
    // });
    // indiArrow[1].addEventListener('click',function(){
    //     if(indiNum < indiPoint.length-1) indiNum++;
    //     $('.indicater div a').removeClass('active');
    //     $('.indicater div a').eq(indiNum).addClass('active');
    //     slideUl.style = `transform:translateX(-${indiNum*100}%)`;
    // });
   
  

});