let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener("click" , function(){
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})

prev.addEventListener("click", function(){
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
})


function otomatikIilerleme() {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
}

setInterval(otomatikIilerleme, 4000);






window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.boxShadow = "0 1px 25px -19px";
    } else {
        navbar.style.boxShadow = "0 0px 0px 0px";
    }
});




