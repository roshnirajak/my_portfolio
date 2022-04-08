let sky= document.getElementsByClassName('sky');
let ground= document.getElementsByClassName('ground');

window.addEventListener('scroll', function(){
    let value= window.scrollY;
    ground.style.top=value + 'px';
})

