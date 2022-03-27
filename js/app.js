$(document).ready(function(){

    let hamberger =document.querySelector('.hamberger');
    let times=document.querySelector('.times');
    let mobilenav=document.querySelector('.mobile-nav');
    
    hamberger.addEventListener('click',function(){
        mobilenav.classList.add('open');
    });

    times.addEventListener('click',function(){
        mobilenav.classList.remove('open');


    });

});
