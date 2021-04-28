$('header').load('inc.html header .head', init);
$('footer').load('inc.html footer .foot')

//menu
function init(){
    const toggleBtn = document.querySelector('.head .menu .menu-trigger');
    const toggleMenu = document.querySelector('.head .menu .nav')
    toggleBtn.addEventListener('click',function(){
        toggleMenu.classList.toggle('active');
        toggleBtn.classList.toggle('active');
    });   
}
