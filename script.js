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
    let interval = 4000;
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







