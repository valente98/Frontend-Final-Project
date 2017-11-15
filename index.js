var slides = document.querySelectorAll('#slides .slide');
console.log(slides);
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}
var myIndex = 0;

function carousel() {
    var i;
    var x = $('.mySlides');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = 'block';
    setTimeout(carousel, 4000); // Change image every 2 seconds
}

function main() {
    carousel();
    nextSlide();
}

$(main);
