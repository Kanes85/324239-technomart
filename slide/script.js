var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var dotSlide = document.querySelectorAll('.dot');

function nextSlide() {
 goToSlide(currentSlide+1);
}

function previousSlide() {
 goToSlide(currentSlide-1);
}

function goToSlide(n) {
 slides[currentSlide].className = 'slide';
 currentSlide = (n+slides.length)%slides.length;
 slides[currentSlide].className = 'slide showing';
 dotSlide[currentSlide].className = 'dot radio-active';
}

next.onclick = function() {
  nextSlide();
};
previous.onclick = function() {
    previousSlide();
};
