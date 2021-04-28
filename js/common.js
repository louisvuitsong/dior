//dior
$(function(){

    $('header').load('inc.html header .head', init);
    $('footer').load('inc.html footer .foot')

    function init(){
        //toggle
        var toggleBtn = document.querySelector('.head .menu .menu-trigger');
        var toggleMenu = document.querySelector('.head .menu .nav')
        toggleBtn.addEventListener('click',function(){
            toggleMenu.classList.toggle('active');
            toggleBtn.classList.toggle('active');
        });

        
    };

    



    
});