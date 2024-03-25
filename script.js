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
setInterval(otomatikIilerleme, 5000);



//yukarı çık butonu işlevi
window.addEventListener('scroll' , function(){
    const topYukari = this.document.querySelector(".topYukari");
    if ( window.scrollY > 180){
        topYukari.style.display = "flex";

        topYukari.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'}) });
    }
    else{
        topYukari.style.display = "none";
    }
})



//Sayac kısmıdır
let counterStarted = false;

window.addEventListener('DOMContentLoaded', function() {
    checkCounter();
});

window.addEventListener('scroll', function() {
    checkCounter();
});

function checkCounter() {
    if (!counterStarted && window.scrollY > 950) {
        startCounter();
        counterStarted = true;
    }
}
function startCounter() {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 6000;
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
}







